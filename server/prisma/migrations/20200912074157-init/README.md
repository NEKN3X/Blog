# Migration `20200912074157-init`

This migration has been generated at 9/12/2020, 7:41:57 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."User" (
"id" text   NOT NULL ,
"name" text   NOT NULL ,
PRIMARY KEY ("id")
)
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200912074157-init
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,13 @@
+datasource db {
+  provider = "postgresql"
+  url = "***"
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model User {
+  id   String @default(cuid()) @id
+  name String
+}
```


