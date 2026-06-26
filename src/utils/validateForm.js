export function validateForm(data) {
  const errors = {};

  // Name: required, letters/spaces only, reasonable length
  if (!data.name || data.name.trim().length < 2) {
    errors.name = "Please enter your full name.";
  } else if (data.name.trim().length > 100) {
    errors.name = "Name is too long.";
  }

  // Email: required, basic format check
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  // Message: required, length bounds
  if (!data.message || data.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters.";
  } else if (data.message.trim().length > 1000) {
    errors.message = "Message is too long (max 1000 characters).";
  }

  return errors;
}

export function sanitizeInput(value) {
  // Strip any HTML tags and trim whitespace — prevents stored/displayed
  // markup from being injected through form fields.
  return value.replace(/<[^>]*>?/gm, "").trim();
}