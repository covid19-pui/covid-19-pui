import React, { useCallback, useMemo } from 'react';
import { FieldArray, useFormikContext } from 'formik';
import { faMinusSquare, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import useStyles from './styles';
import Grid from '@material-ui/core/Grid';

function withMultipleSelections(SelectionComponent, WrapperComponent = <MultiSelectWrapper />) {
  return ({ name, options, ...props }) => {
    const SelectionComponentWithIcons = useMemo(() => {
      return withIcons(SelectionComponent, WrapperComponent);
    }, []);
    const { values } = useFormikContext();

    const plusIcon = useCallback((helpers, index) => {
      return { icon: faPlusSquare, onClick: () => helpers.insert(index + 1, '') };
    }, []);

    const minusIcon = useCallback((helpers, index) => {
      return { icon: faMinusSquare, onClick: () => helpers.remove(index) };
    }, []);

    const indexOptions = useCallback(
      options
        ? index => {
            return options.filter(location => {
              return (
                values[name][index] === location.value || values[name].indexOf(location.value) < 0
              );
            });
          }
        : index => options,
      [name, options, values]
    );

    const lastIcon = useCallback(
      options
        ? helpers => {
            const icon = [minusIcon(helpers, values[name].length - 1)];
            if (values[name].slice(-1)[0] && indexOptions(values[name].length - 1).length > 1)
              return icon.concat(plusIcon(helpers, values[name].length - 1));
            return icon;
          }
        : helpers => {
            return [
              minusIcon(helpers, values[name].length - 1),
              plusIcon(helpers, values[name].length - 1)
            ];
          },
      [indexOptions, minusIcon, name, plusIcon]
    );

    return (
      <FieldArray
        name={name}
        render={arrayHelpers => (
          <>
            <SelectionComponentWithIcons
              {...props}
              name={`${name}.0`}
              withIcon={
                values[name].length > 1
                  ? values[name][1] && minusIcon(arrayHelpers, 0)
                  : values[name][0] && plusIcon(arrayHelpers, 0)
              }
              options={indexOptions(0)}
            />
            {values[name] &&
              values[name]
                .slice(1, values[name].length - 1)
                .map((location, index) => (
                  <SelectionComponentWithIcons
                    key={index.toString()}
                    {...props}
                    name={`${name}.${index + 1}`}
                    withIcon={minusIcon(arrayHelpers, index + 1)}
                    options={indexOptions(index + 1)}
                  />
                ))}
            {values[name].length > 1 && (
              <SelectionComponentWithIcons
                {...props}
                name={`${name}.${values[name].length - 1}`}
                withIcon={lastIcon(arrayHelpers)}
                options={indexOptions(values[name].length - 1)}
              />
            )}
          </>
        )}
      />
    );
  };
}

function withIcons(WrappedComponent, wrapperComponent) {
  return ({ withIcon, ...wrappedProps }) => {
    const styles = useStyles();

    const icons = useMemo(() => {
      return (
        <>
          {withIcon &&
            [withIcon]
              .flat()
              .map(({ icon, onClick }, index) => (
                <FontAwesomeIcon
                  icon={icon}
                  className={styles.icon}
                  onClick={onClick}
                  key={index}
                />
              ))}
        </>
      );
    }, [styles.icon, withIcon]);

    const wrappedComponent = useMemo(() => {
      return <WrappedComponent icons={icons} {...wrappedProps} />;
    }, [icons, wrappedProps]);

    return wrapperComponent
      ? useMemo(() => {
          return React.cloneElement(wrapperComponent, { icons }, wrappedComponent);
        }, [icons, wrappedComponent])
      : wrappedComponent;
  };
}

function MultiSelectWrapper({ children, icons }) {
  const styles = useStyles();

  return (
    <Grid container alignItems="center" className={styles.multSelectWrapper} wrap="nowrap">
      <Grid item xs={11} className={styles.marginBottom}>
        {children}
      </Grid>

      <Grid item xs={1} container wrap="nowrap">
        {icons}
      </Grid>
    </Grid>
  );
}

export default withMultipleSelections;
