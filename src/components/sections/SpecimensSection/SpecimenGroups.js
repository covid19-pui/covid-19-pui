import React from 'react';
import clsx from 'clsx';
import { FieldArray } from 'formik';
import { Grid, Button, IconButton } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faMinusSquare } from '@fortawesome/free-solid-svg-icons';
import { createSpecimen } from 'components/FormProvider';

import { FormGroupDivider } from 'components/forms';
import Specimen from './Specimen';
import useStyles from './styles';

function FieldArrayItems({
  remove,
  push,
  form: {
    values: { specimens }
  }
}) {
  const styles = useStyles();

  return (
    <Grid container className={clsx(styles['specimen-groups'], styles['margin-bottom'])}>
      {specimens && specimens.length > 0 ? (
        specimens.map((specimen, index) => (
          <Grid item xs={12} key={specimen._id}>
            <Specimen name={`specimens.${index}`} />

            <IconButton
              type="button"
              onClick={() => remove(index)}
              size="small"
              color="primary"
              className={styles['margin-bottom']}
            >
              <FontAwesomeIcon icon={faMinusSquare} />
            </IconButton>

            {index + 1 === specimens.length && (
              <IconButton
                type="button"
                onClick={() => push(createSpecimen())}
                size="small"
                color="secondary"
                className={styles['margin-bottom']}
              >
                <FontAwesomeIcon icon={faPlusSquare} />
              </IconButton>
            )}

            <FormGroupDivider />
          </Grid>
        ))
      ) : (
        <Button type="button" onClick={() => push(createSpecimen())} color="secondary">
          <FontAwesomeIcon icon={faPlusSquare} className={styles['button-icon']} /> Add Specimen
        </Button>
      )}
    </Grid>
  );
}

export function SpecimenGroups() {
  return <FieldArray name="specimens" component={FieldArrayItems} />;
}

export default SpecimenGroups;
