-- CreateEnum
CREATE TYPE "PlanStatus" AS ENUM ('ACTIVE', 'DELETED', 'SUSPENDED');

-- AlterTable
ALTER TABLE "plans" ADD COLUMN     "status" "PlanStatus" NOT NULL DEFAULT 'ACTIVE';
