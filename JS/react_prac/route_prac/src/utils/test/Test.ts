type Role = keyof typeof ROLES;
type Permission = (typeof ROLES)[Role][number];
const ROLES = {
  admin: [
    "view:comments",
    "create:comments",
    "update:comments",
    "delete:comments",
  ],
  moderator: ["view:comments", "create:comments", "update:comments"],
  user: ["view:comments", "create:comments"],
};

export const hasPermission = (
  user: { id: string; role: Role },
  permission: Permission
) => {
  (ROLES[user.role] as readonly Permission[]).includes(permission);
};
