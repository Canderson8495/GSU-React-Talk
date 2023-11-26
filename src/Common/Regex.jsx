export const validEmail = new RegExp(
    '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
 );
 export const nonNumericText = new RegExp(
    '^[a-zA-Z]*$'
 );
 export const validBirthday = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/

 export const specialChar = /[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/;

 export const hasNumeric = /\d/