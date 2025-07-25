import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { bookingAPI } from '../../features/booking/bookingApi';
type CreateBookingInputs = {
    bookingName: string;
    description: string;
    userId: number;
    dueDate: string;
    isCompleted: boolean;
};

const schema = yup.object({
    bookingName: yup.string().max(75, "Max 75 characters").required("Booking name is required"),
    description: yup.string().max(255, "Max 255 characters").required("Description is required"),
    userId: yup.number().required("User ID is required").positive("User ID must be a positive number").integer("User ID must be an integer"),
    isCompleted: yup.boolean().default(false),
    dueDate: yup.string().required("Due date is required"),
});

const CreateBooking = () => {
    const [createBooking, { isLoading }] = bookingAPI.useCreateBookingMutation();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<CreateBookingInputs>({
        resolver: yupResolver(schema),
    });

    const onSubmit: SubmitHandler<CreateBookingInputs> = async (data) => {
        try {
            await createBooking(data).unwrap();
            // console.log("Booking created successfully:", response);
            
            reset(); // Clear the form after successful submission
            (document.getElementById('create_booking') as HTMLDialogElement)?.close();

        } catch (error) {
            console.error("Error creating booking:", error);
           

        }
    };

    return (
        <dialog id="create_booking" className="modal sm:modal-middle">
            <div className="modal-box bg-gray-600 text-white w-full max-w-xs sm:max-w-lg mx-auto rounded-lg">

                <h3 className="font-bold text-lg mb-4">Create New Booking</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                    <input
                        type="text"
                        {...register("bookingName")}
                        placeholder="Booking Name"
                        className="input rounded w-full p-2 focus:ring-2 focus:ring-blue-500 text-lg bg-white text-gray-800"

                    />
                    {errors.bookingName && (
                        <span className="text-sm text-red-700">{errors.bookingName.message}</span>
                    )}

                    <textarea
                        {...register("description")}
                        placeholder="Description"
                        className="textarea textarea-bordered w-full p-2 focus:ring-2 focus:ring-blue-500 text-lg bg-white text-gray-800"
                    />
                    {errors.description && (
                        <span className="text-sm text-red-700">{errors.description.message}</span>
                    )}

                    <input
                        type="number"
                        {...register("userId")}
                        placeholder="User ID"
                        className="input rounded w-full p-2 focus:ring-2 focus:ring-blue-500 text-lg bg-white text-gray-800"
                    />

                    {errors.userId && (
                        <span className="text-sm text-red-700">{errors.userId.message}</span>
                    )}

                    <input
                        type="date"
                        {...register("dueDate")}
                        className="input rounded w-full p-2 focus:ring-2 focus:ring-blue-500 text-lg bg-white text-gray-800"
                    />
                    {errors.dueDate && (
                        <span className="text-sm text-red-700">{errors.dueDate.message}</span>
                    )}

                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text mr-4 text-white">Status</span>
                            <div className="flex gap-4">
                                <label className="flex items-center gap-1">
                                    <input
                                        type="radio"
                                        value="true"
                                        {...register("isCompleted")}
                                        className="radio radio-primary text-green-400"
                                    />
                                    Completed
                                </label>
                                <label className="flex items-center gap-1">
                                    <input
                                        type="radio"
                                        value="false"
                                        {...register("isCompleted")}
                                        className="radio radio-primary  text-yellow-400"
                                        defaultChecked
                                    />
                                    Pending
                                </label>
                            </div>
                        </label>
                    </div>
                    {errors.isCompleted && (
                        <span className="text-sm text-red-700">{errors.isCompleted.message}</span>
                    )}

                    <div className="modal-action">
                        <button type="submit" className="btn btn-primary" disabled={isLoading}>
                            {isLoading ? (
                                <>
                                    <span className="loading loading-spinner text-primary" /> Creating...
                                </>
                            ) : "Create"}
                        </button>
                        <button
                            className="btn"
                            type="button"
                            onClick={() => {
                                (document.getElementById('my_modal_5') as HTMLDialogElement)?.close();
                            }}
                        >
                            Close
                        </button>

                    </div>
                </form>
            </div>
        </dialog>
    );
};

export default CreateBooking;