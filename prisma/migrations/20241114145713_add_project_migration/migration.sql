/*
  Warnings:

  - You are about to drop the column `category` on the `Portfolio` table. All the data in the column will be lost.
  - Added the required column `githubLink` to the `Portfolio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Portfolio` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Portfolio` DROP COLUMN `category`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `githubLink` VARCHAR(191) NOT NULL,
    ADD COLUMN `liveLink` VARCHAR(191) NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;
