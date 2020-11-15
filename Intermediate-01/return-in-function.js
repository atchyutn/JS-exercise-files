// write a function to a string based on the provided user role and name.

var roleBasedFunction = function (role, name) {
  switch (role) {
    case "admin":
      return `${name} has ${role} role to do access anything in the system`;
    case "moderator":
      return `${name} has ${role} role to do access to modify content and comments `;
    case "user":
      return `${name} has ${role} role to do access content from the library of courses`;
    default:
      break;
  }
}


console.log(roleBasedFunction("admin", "Atchyut"));