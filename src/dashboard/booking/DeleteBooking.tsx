import { toast } from "sonner";
import { bookingAPI } from '../../features/booking/bookingApi';
import type { TIBooking } from '../../features/booking/bookingApi';

type DeleteBookingProps = {
    booking: TIBooking | null;
};

const DeleteBooking = ({ booking }: DeleteBookingProps) => {
    const [deleteBooking, { isLoading }] = bookingAPI.useDeleteBookingMutation(
        { fixedCacheKey: "deleteBooking" } //used to prevent cache invalidation issues - in simple terms, it helps to keep the cache consistent
    );

    const handleDelete = async () => {
        try {
            if (!booking) {
                toast.error("No todo selected for deletion.");
                return;
            }
            await deleteBooking(booking);
            toast.success("Booking deleted successfully!");
            (document.getElementById('delete_modal') as HTMLDialogElement)?.close();

        } catch (error) {
            console.error("Error deleting booking:", error);
            toast.error("Failed to delete booking. Please try again.");

        }
    };

    return (
        <dialog id="delete_modal" className="modal sm:modal-middle">
            <div className="modal-box bg-gray-600 text-white w-full max-w-xs sm:max-w-lg mx-auto rounded-lg">

                <h3 className="font-bold text-lg mb-4">Delete Booking</h3>
                <p className="mb-6">
                    Are you sure you want to delete <span className="font-semibold">{booking?.booking_id}</span>                </p>
                <div className="modal-action flex gap-4">
                    <button
                        className="btn btn-error"
                        onClick={handleDelete}
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <>
                                <span className="loading loading-spinner text-primary" /> Deleting...
                            </>
                        ) : "Yes, Delete"}
                    </button>
                    <button
                        className="btn"
                        type="button"
                        onClick={() => (document.getElementById('delete_modal') as HTMLDialogElement)?.close()}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </dialog>
    );
};

export default DeleteBooking;