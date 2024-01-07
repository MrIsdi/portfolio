-- CreateTable
CREATE TABLE "certification" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "organizer" TEXT,
    "completeTime" TEXT,

    CONSTRAINT "certification_pkey" PRIMARY KEY ("id")
);
