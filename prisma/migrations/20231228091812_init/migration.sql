-- CreateTable
CREATE TABLE "experience" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "place" TEXT,
    "completeTime" TEXT,
    "summary" TEXT,

    CONSTRAINT "experience_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "portfolio" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "link" TEXT,
    "tech" TEXT,

    CONSTRAINT "portfolio_pkey" PRIMARY KEY ("id")
);
