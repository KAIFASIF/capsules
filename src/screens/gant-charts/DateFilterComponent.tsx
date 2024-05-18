import React from "react";

import { FormProvider, useForm } from "react-hook-form";
import Layout from "../../components/Layout";
import RHFTextField from "../../libraries/form-fields/RHFTextField";
import Button from "../../components/Button";

const DateFilterComponent = () => {
  const methods = useForm();

  return (
    <Layout isLoading={false}>
      <div className="mt-4 w-full">
        <div className="w-full mt-4 p-4">
          <FormProvider {...methods}>
            <RHFTextField name="description" label="Description" />
          </FormProvider>
        </div>
        <div className="w-full mt-4 p-4">
          <FormProvider {...methods}>
            <RHFTextField type="date" name="startDate" label="Start date" />
          </FormProvider>
        </div>
        <div className="w-full mt-4 p-4">
          <FormProvider {...methods}>
            <RHFTextField type="date" name="endDate" label="End date" />
          </FormProvider>
        </div>
        <div className="w-full mt-4 p-4">
          <Button
            label="Submit"
            onClick={() => alert()}
            className="rounded-2xl hover:bg-blue-400 outline-none border-none"
          />
        </div>
      </div>
    </Layout>
  );
};

export default React.memo(DateFilterComponent);
