import { DropzoneArea } from "material-ui-dropzone";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux";
import { setFiles } from "../../redux/slices/UploadFiles/UploadSlice";

export const FileDropZone = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleSave = (files: File[]) => {
    dispatch(setFiles(files));
  };

  return (
    <DropzoneArea
      acceptedFiles={["image/*"]}
      onChange={handleSave}
      dropzoneText="Arrastra los archivos aquí"
      showAlerts={true}
      filesLimit={20}
      initialFiles={[]}
    />
  );
};
