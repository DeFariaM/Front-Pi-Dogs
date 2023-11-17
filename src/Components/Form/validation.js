export const validation = (input) => {
  let errors = {};

  //name
  if (!input.name) {
    errors.name = "Please insert a valid name!";
  } else if (input.name.length > 20) {
    errors.name = "The name must have less than 20 characters";
  } else if (/\d/.test(input.name)) {
    errors.name = "The name cant't have a number";
  } else if (!/\b[A-Z]/.test(input.name)) {
    errors.name = "The first letter must be upperCase";
  } else {
    errors.name = "";
  }

  //weight
  if (input.weight_max < input.weight_min) {
    errors.weight = "The maximun weight can't be minor than the minimun";
  } else if (!input.weight_min || !input.weight_max) {
    errors.weight = "This can't be empty";
  } else if (input.weight_min <= 0 || input.weight_max <= 0) {
    errors.weight = "The weight must be greater than 0";
  } else {
    errors.weight = "";
  }

  //height
  if (input.height_max < input.height_min) {
    errors.height = "The maximun height can't be minor than the minimun";
  } else if (!input.height_max || !input.height_min) {
    errors.height = "This can't be empty";
  } else if (input.height_min <= 0 || input.height_max <= 0) {
    errors.height = "The height must be greater than 0";
  } else {
    errors.height = "";
  }

  //life span

  const lifeSpan = input.life_span.split(" - ");
  const min = Number(lifeSpan[0]);
  const max = Number(lifeSpan[1]);
  if (!input.life_span) {
    errors.life_span = "This can't be empty";
  } else if (!/\d/.test(input.life_span)) {
    errors.life_span = "The life span must be declared with numbers";
  } else if (!input.life_span.includes(" - ")) {
    errors.life_span =
      "The life span must be declared like the example (12 - 15)";
  } else if (min > max) {
    errors.life_span = "The first number can't be greater than the second one";
  } else {
    errors.life_span = "";
  }

  return errors;
};
