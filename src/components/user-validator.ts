export function ValidateUser(name: string, email: string, phone: string, birthDate: string) {
  const errors = [];
  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+(\.com$|\.com\.br$)/;
  const birthDateRegex = /^(19|20)\d\d[-](0[1-9]|1[012])[-](0[1-9]|[12][0-9]|3[01])$/;

  if (name.length === 0) {
    errors.push('Nome não pode estar vazio');
  }

  if (!emailRegex.test(email)) {
    errors.push(' Formato de email inválido');
  }

  if (phone.length < 10) {
    errors.push(' Número de telefone inválido');
    if (phone.length === 8 || phone.length === 9) {
      errors.push(' Informe o DDD');
    }
  }

  if (!birthDateRegex.test(birthDate)) {
    errors.push(' Formato de data inválido, esperado yyyy-mm-dd');
  }

  return errors;
}
