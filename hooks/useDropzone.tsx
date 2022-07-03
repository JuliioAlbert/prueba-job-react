// import { useCallback, useState } from "react";
// import { Accept, DropEvent, FileRejection, useDropzone } from "react-dropzone";

// export interface FileTempDropzone {
//   key: string;
//   type: string;
//   file: File;
//   preview: string;
// }

// type Config = {
//   maxSize?: number | undefined;
//   maxFiles?: number | undefined;
//   acceptFile?: Accept | undefined;
//   multiple?: boolean | undefined;
// };

// export const useUploadFilesDrop = (config: Config) => {
//   const { acceptFile, maxFiles, maxSize, multiple } = config;
//   let [filesUpload, setFilesUpload] = useState<FileTempDropzone[]>([]);
//   let [filesRejectUpload, setfilesRejectUpload] = useState<FileTempDropzone[]>(
//     []
//   );

//   const borrarArchivo = (file: FileTempDropzone): void => {
//     setFilesUpload([
//       ...filesUpload.filter((f) => f.file.name != file.file.name),
//     ]);
//   };

//   const llenarFiles = (files: File[]): FileTempDropzone[] => {
//     const dataFiles: FileTempDropzone[] = [];

//     files.forEach((file: File) => {
//       dataFiles.push({
//         key: file.name,
//         type: file.type.split("/")[0],
//         file,
//         preview: URL.createObjectURL(file),
//       });
//     });

//     return dataFiles;
//   };

//   const onDrop = useCallback(
//     (
//       filesSelect: File[],
//       fileRejections: FileRejection[],
//       event: DropEvent
//     ) => {
//       if (filesSelect.length > 0) {
//         setFilesUpload(llenarFiles(filesSelect));
//       }

//       if (fileRejections.length > 0) {
//         setfilesRejectUpload(llenarFiles(fileRejections.map((e) => e.file)));
//       }
//     },
//     []
//   );

//   const { getRootProps, getInputProps } = useDropzone({
//     noKeyboard: true,
//     multiple,
//     onDrop,
//     maxFiles,
//     maxSize,
//     accept: acceptFile,
//   });

//   const onResetValue = () => {
//     setFilesUpload([]);
//   };

//   // "image/*": [".jpeg", ".png", ".pdf"], //Imagenes
//   // "application/pdf": [".pdf"], // ".pdf"
//   // "video/*": [".mp4"], // .mp4
//   // "audio/*": [".mp3"], // .mp
//   // "application/msword": [".doc", ".docx"], //docx
//   // "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [ ".docx" ], // .docx
//   // "application/vnd.ms-excel": [".xls", ".xlsx"], Excel
//   // "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [".xlsx"], // .xlsx
//   // "application/vnd.ms-powerpoint": [".ppt", ".pptx"], // .pptx
//   // "application/vnd.openxmlformats-officedocument.presentationml.presentation": [".pptx"], // .pptx
//   // "application/vnd.openxmlformats-officedocument.presentationml.slideshow": [".pptx"], // .pptx
//   // "application/vnd.openxmlformats-officedocument.presentationml.slide": [".pptx"], // .pptx
//   // "application/vnd.openxmlformats-officedocument.presentationml.template": [".pptx"], // .pptx
//   // "application/vnd.openxmlformats-officedocument.presentationml.notes": [".pptx"], // .pptx
//   // "application/vnd.openxmlformats-officedocument.presentationml.handout": [".pptx"], // .pptx

//   return {
//     borrarArchivo,
//     onResetValue,
//     filesUpload,
//     getRootProps,
//     getInputProps,
//     filesRejectUpload,
//   };
// };
