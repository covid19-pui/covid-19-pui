import React, { useCallback, useMemo } from 'react';
import { FieldArray, useFormikContext } from 'formik';
import { faMinusSquare, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Grid from '@material-ui/core/Grid';

import useStyles from './styles';

function withMultipleSelections(SelectionComponent, WrapperComponent) {
  return ({ name, label, options }) => {
    const SelectionComponentWithIcons = withIcons(SelectionComponent, WrapperComponent);
    const { values } = useFormikContext();

    const onChange = useCallback((helpers, index) => {
      return event => {
        helpers.replace(index, event.target.value);
      };
    }, []);

    const plusIcon = useCallback((helpers, index) => {
      return { icon: faPlusSquare, onClick: () => helpers.insert(index + 1, '') };
    }, []);

    const minusIcon = useCallback((helpers, index) => {
      return { icon: faMinusSquare, onClick: () => helpers.remove(index) };
    }, []);

    const indexOptions = useCallback(
      index => {
        return options.filter(location => {
          return values[name][index] === location.value || values[name].indexOf(location.value) < 0;
        });
      },
      [name, options, values]
    );

    const lastIcon = useCallback(
      helpers => {
        const icon = [minusIcon(helpers, values[name].length - 1)];
        if (values[name].slice(-1)[0] && indexOptions(values[name].length - 1).length > 1)
          return icon.concat(plusIcon(helpers, values[name].length - 1));
        return icon;
      },
      [indexOptions, minusIcon, name, plusIcon, values]
    );

    return (
      <FieldArray
        name={name}
        render={arrayHelpers => (
          <>
            <SelectionComponentWithIcons
              name={`${name}.0`}
              label={label}
              withIcon={
                values[name].length > 1
                  ? values[name][1] && minusIcon(arrayHelpers, 0)
                  : values[name][0] && plusIcon(arrayHelpers, 0)
              }
              onChange={onChange(arrayHelpers, 0)}
              options={indexOptions(0)}
            />
            {values[name] &&
              values[name]
                .slice(1, values[name].length - 1)
                .map((location, index) => (
                  <SelectionComponentWithIcons
                    key={index.toString()}
                    name={`${name}.${index + 1}`}
                    label={label}
                    withIcon={minusIcon(arrayHelpers, index + 1)}
                    onChange={onChange(arrayHelpers, index + 1)}
                    options={indexOptions(index + 1)}
                  />
                ))}
            {values[name].length > 1 && (
              <SelectionComponentWithIcons
                name={`${name}.${values[name].length - 1}`}
                label={label}
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
    const wrappedComponent = useMemo(() => {
      return <WrappedComponent {...wrappedProps} />;
    }, [wrappedProps]);

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

    return wrapperComponent
      ? React.cloneElement(wrapperComponent, { icons }, wrappedComponent)
      : wrappedComponent;
  };
}

export default withMultipleSelections;
