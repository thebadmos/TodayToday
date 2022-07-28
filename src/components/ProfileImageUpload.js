import { CircularProgress, Tooltip } from "@mui/material";
import imageUploadAvatar from "../assets/images/imageUpload.svg";
import Text from "../components/Typography/Typography";

const ProfileImageUpload = ({
  image,
  fileInputRef,
  onChange,
  onClick,
  loading,
  error,
  touched,
  disabled = false,
}) => {
  const fileUploader = () => {
    return (
      <div className="flex justify-center">
        {loading ? (
          <CircularProgress />
        ) : (
          <Tooltip title="Add Profile Image">
            <div className="text-center">
              {!image && (
                <img
                  src={imageUploadAvatar}
                  alt="avatar-upload"
                  onClick={onClick}
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: 50,
                  }}
                  className={
                    error && touched
                      ? "border-2 border-red-800 rounded"
                      : "cursor-pointer"
                  }
                />
              )}
              {image && (
                <img
                  src={image}
                  alt="avatar-upload"
                  onClick={onClick}
                  className="cursor-pointer"
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: 50,
                  }}
                />
              )}
              {error && touched ? (
                <Text variant="small" weight="normal" color="text-red-700">
                  {error}
                </Text>
              ) : null}
            </div>
          </Tooltip>
        )}
        <input
          type="file"
          style={{ display: "none" }}
          accept="image/*"
          ref={fileInputRef}
          onChange={onChange}
          disabled={disabled}
        />
      </div>
    );
  };

  return <div>{fileUploader()}</div>;
};

export default ProfileImageUpload;
