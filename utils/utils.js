import validator from 'validator';
export const formatNumber = (number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number);
};

export const validatedForm = (username, email, password, confirmpassword) => {
  /* console.log('username: ', username);
  console.log('email: ', email);
  console.log('password: ', password);
  console.log('confirmpassword: ', confirmpassword);
*/
  var errors = [];
  // validator text
  if (validator.isEmpty(validator.trim(username))) {
    errors.push(' The username is empty. ');
  }

  if (validator.isEmpty(validator.trim(email))) {
    errors.push(' The email is empty. ');
  } else {
    if (!validator.isEmail(validator.trim(email))) {
      errors.push(' The email format is incorrect. ');
    }
  }

  if (validator.isEmpty(validator.trim(password))) {
    errors.push(' The password is empty. ');
  } else {
    if (
      !validator.isLength(validator.trim(password), {
        min: 6,
      })
    ) {
      errors.push(' The password must be at least 6 charactors. ');
    }
  }

  if (validator.trim(confirmpassword) !== validator.trim(password)) {
    errors.push('Password confirmation does not match password. ');
  }

  return errors.length > 0 ? errors : null;
};

export const validatedLogin = (username, email, password) => {
  var errors = [];
  // validator text
  if (validator.isEmpty(validator.trim(username))) {
    errors.push(' The username is empty. ');
  }

  if (email) {
    if (validator.isEmpty(validator.trim(email))) {
      errors.push(' The email is empty. ');
    } else {
      if (!validator.isEmail(validator.trim(email))) {
        errors.push(' The email format is incorrect. ');
      }
    }
  }

  if (validator.isEmpty(validator.trim(password))) {
    errors.push(' The password is empty. ');
  } else {
    if (
      !validator.isLength(validator.trim(password), {
        min: 6,
      })
    ) {
      errors.push(' The password must be at least 6 charactors. ');
    }
  }
};

export const validatedEmail = (email) => {
  var errors = [];
  // validator text

  if (email) {
    if (validator.isEmpty(validator.trim(email))) {
      errors.push(' The email is empty. ');
    } else {
      if (!validator.isEmail(validator.trim(email))) {
        errors.push(' The email format is incorrect. ');
      }
    }
  }
};

export const validatedcode = (email, password) => {
  var errors = [];
  // validator text

  if (validator.isEmpty(validator.trim(email))) {
    errors.push(' The email is empty. ');
  } else {
    if (!validator.isEmail(validator.trim(email))) {
      errors.push(' The email format is incorrect. ');
    }
  }

  if (validator.isEmpty(validator.trim(password))) {
    errors.push(' The password is empty. ');
  } else {
    if (
      !validator.isLength(validator.trim(password), {
        min: 6,
      })
    ) {
      errors.push(' The password must be at least 6 charactors. ');
    }
  }
};
export const validatedchgpw = (oldpassword, newpassword, confirmpassword) => {
  var errors = [];
  // validator text

  if (validator.isEmpty(validator.trim(oldpassword))) {
    errors.push(' The oldpassword is empty. ');
  } else {
    if (
      !validator.isLength(validator.trim(oldpassword), {
        min: 6,
      })
    ) {
      errors.push(' The oldpassword must be at least 6 charactors. ');
    }
  }

  if (validator.isEmpty(validator.trim(newpassword))) {
    errors.push(' The newpassword is empty. ');
  } else {
    if (
      !validator.isLength(validator.trim(newpassword), {
        min: 6,
      })
    ) {
      errors.push(' The newpassword must be at least 6 charactors. ');
    }
  }

  if (validator.trim(confirmpassword) !== validator.trim(newpassword)) {
    errors.push('Password confirmation does not match password. ');
  }
};
