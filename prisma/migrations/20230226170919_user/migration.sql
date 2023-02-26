/*
  Warnings:

  - You are about to drop the `friend` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `friend`;

-- CreateTable
CREATE TABLE `User` (
    `userID` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`userID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
