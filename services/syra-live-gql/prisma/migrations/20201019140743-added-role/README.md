# Migration `20201019140743-added-role`

This migration has been generated at 10/19/2020, 2:07:43 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TYPE "public"."Role" AS ENUM ('ADMIN', 'MODERATOR', 'USER')

ALTER TABLE "public"."User" ADD COLUMN "role" "Role"  NOT NULL DEFAULT E'USER'
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201019140208-add-session-field..20201019140743-added-role
--- datamodel.dml
+++ datamodel.dml
@@ -2,9 +2,9 @@
 // learn more about it in the docs: https://pris.ly/d/prisma-schema
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
@@ -22,8 +22,9 @@
   createdAt DateTime @default(now())
   updatedAt DateTime @updatedAt
   address   Address?
   session   String?
+  role      Role     @default(USER)
 }
 model Address {
   id            String  @id @default(cuid())
@@ -34,5 +35,11 @@
   state         String
   country       String
   createdAt     DateTime @default(now())
   updatedAt     DateTime @updatedAt
+}
+
+enum Role {
+  ADMIN
+  MODERATOR
+  USER
 }
```


