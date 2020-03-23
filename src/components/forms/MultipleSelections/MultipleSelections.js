import React, { memo, useCallback, useMemo } from 'react';
import { FieldArray, useFormikContext } from 'formik';
import { faMinusSquare, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import useStyles from './styles';

function withMultipleSelections(SelectionComponent, WrapperComponent) {
  return ({ name, label, options }) => {
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
              name={`${name}.0`}
              label={label}
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
                    name={`${name}.${index + 1}`}
                    label={label}
                    withIcon={minusIcon(arrayHelpers, index + 1)}
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

export default withMultipleSelections;
