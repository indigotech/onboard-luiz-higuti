export function Validate (email:string, password: string) {
  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.com$/ ;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{7,}$/ ;
  const errors:Array<string> = [];

  if (!emailRegex.test(email)) {
    errors.push('Invalid email'); 
  }

  if (!passwordRegex.test(password)) {
    errors.push(' Invalid password');
  }

  return errors
}