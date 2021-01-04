import { body, validationResult } from 'express-validator';

body('count')
  .trim()
  .isLength({ min: 1 })
  .escape()
  .custom((value) => {
    if (isNaN(parseInt(value))) {
      throw new Error('count shound be numebr');
    }
    return true;
  });
