import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCabin } from "../../services/apiCabins";


import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import toast from "react-hot-toast";
import FormRow from "../../ui/FormRow";



function CreateCabinForm() {
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;

  const queryClient = useQueryClient();
  const { mutate, isLoading: isCreating } = useMutation({
    mutationFn: createCabin,
    onSuccess: () => {
      toast.success('New cabin successfully created');
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
      reset();
    },
    onError: (err) => toast.error(err.message)
  })
  function onSubmit(data) {
    mutate({ ...data, image: data.image[0] });
  }
  function onError(error) {
    console.log(error)
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="Cabin name" error={errors?.name?.message}>
        <Input disabled={isCreating} type="text" id="name" {...register("name", {
          required: "This field is required",
          min: {
            value: 1,
            message: 'Capacity should be at least 1'
          }
        })} />

      </FormRow>
      <FormRow label="Regular price" error={errors?.regularPrice?.message}>
        <Input disabled={isCreating} type="number" id="regularPrice" {...register("regularPrice", {
          required: "This field is required",
          min: {
            value: 1,
            message: 'Capacity should be at least 1'
          }
        })} />
      </FormRow>
      <FormRow label="Discount" error={errors?.discount?.message}>
        <Input disabled={isCreating} type="number" id="Discount"  {...register("discount", {
          required: "This field is required",
          validate: (value) => value <= getValues().regularPrice || "Discount should be less than regular price"

        })} />
      </FormRow>
      <FormRow label="Maximum capacity" error={errors?.maxCapacity?.message}>
        <Input disabled={isCreating} type="number" id="maxCapacity" {...register("maxCapacity", {
          required: "This field is required",
          min: {
            value: 1,
            message: 'Capacity should be at least 1'
          }
        })} />
      </FormRow>





      <FormRow label="Description for website" error={errors?.description?.message}>

        <Textarea disabled={isCreating} type="number" id="Description" defaultValue="" {...register("description", {
          required: "This field is required"
        })} />
      </FormRow>

      <FormRow label="Cabin Photo">
        <FileInput id="image" accept="image/*" type="file" {...register("image", { required: "this field is required" })} />
      </FormRow>

      <FormRow >
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isCreating}>Add cabin</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
