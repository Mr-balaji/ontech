const validateForm = (data, validationRules) => {
  let errors = {};

 
    // Loop through each field in form data and validate
    for (let fieldName in data) {
      if (validationRules[fieldName]) {
        const rules = validationRules[fieldName];
        for (let rule in rules) {
          if (rule === 'required' && rules[rule]) {
            errors[fieldName] = `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`;
          }
        }
      }
    }
  

  console.log('errors', errors);

  return errors; 
};

export default validateForm;
