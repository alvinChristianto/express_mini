-- CreateTable
CREATE TABLE "Reservation" (
    "id_reservation" SERIAL NOT NULL,
    "guest_name" TEXT NOT NULL,

    CONSTRAINT "Reservation_pkey" PRIMARY KEY ("id_reservation")
);
