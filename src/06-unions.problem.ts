type Role = 'admin'|'user'|'super-admin';

type ExtendedRoles = ({
    role: 'admin',
    adminPassword:string,
}| {
    role:'user',
}|
{
    role: 'super-admin',
    superAdminPassword: string,
})

type User = ({
  id: number,
  firstName: string,
  lastName: string,
}) & ExtendedRoles

export const defaultUser: User = {
  id: 1,
  firstName: "Matt",
  lastName: "Pocock",
  role: 'admin',
  adminPassword:'gdfd'
};
