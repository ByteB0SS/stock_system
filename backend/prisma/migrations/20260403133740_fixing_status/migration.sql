/*
  Warnings:

  - You are about to drop the column `statsus` on the `workspaces` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "workspaces" DROP COLUMN "statsus",
ADD COLUMN     "status" "WorkspaceStatus" NOT NULL DEFAULT 'ACTIVE';
