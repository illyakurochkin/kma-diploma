export enum Role {
  ADMIN = 'system-administrator',
}

const adminEmail = process.env.ADMIN_EMAIL || 'illya.kurochkin@gmail.com';

export default ({context}: any, roles: Role[]) => {
  if(roles.includes(Role.ADMIN)) {
    return context?.email === adminEmail;
  }
  return true;
};
