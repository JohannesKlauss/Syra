# Migration `20201019140208-add-session-field`

This migration has been generated at 10/19/2020, 2:02:08 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."User" ADD COLUMN "session" text   
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201019103318-address-addition..20201019140208-add-session-field
--- datamodel.dml
+++ datamodel.dml
@@ -2,22 +2,28 @@
 // learn more about it in the docs: https://pris.ly/d/prisma-schema
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
 }
+generator typegraphql {
+  provider = "typegraphql-prisma"
+  output   = "../prisma/generated/type-graphql"
+}
+
 model User {
   id        String   @id @default(cuid())
   name      String
   email     String   @unique
   createdAt DateTime @default(now())
   updatedAt DateTime @updatedAt
   address   Address?
+  session   String?
 }
 model Address {
   id            String  @id @default(cuid())
```


