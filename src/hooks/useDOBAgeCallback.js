import { useCallback } from 'react';
import { unstable_batchedUpdates as batch } from 'react-dom';
import { differenceInDays, differenceInMonths, differenceInYears } from 'date-fns';

export default function useDOBAgeCallback(setFieldValue) {
  const calculateAge = useCallback(
    date => {
      batch(() => {
        setFieldValue('dateOfBirth', date);
        if (!isNaN(date)) {
          const now = new Date();
          const dayDiff = differenceInDays(now, date);
          const monthDiff = differenceInMonths(now, date);
          const yearDiff = differenceInYears(now, date);

          if (dayDiff <= 0) return;
          else if (monthDiff === 0) {
            setFieldValue('age', dayDiff);
            setFieldValue('ageUnits', 'days');
          } else if (monthDiff <= 12) {
            setFieldValue('age', monthDiff);
            setFieldValue('ageUnits', 'months');
          } else {
            setFieldValue('age', yearDiff);
            setFieldValue('ageUnits', 'years');
          }
        }
      });
    },
    [setFieldValue]
  );

  return calculateAge;
}
