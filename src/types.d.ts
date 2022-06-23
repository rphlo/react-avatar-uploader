import * as React from "react";

export interface Props {
  onImageUpload?: () => void;
  placeholder?: string;
  disabled?: boolean;
  fileType?: string;
  size?: number;
  defaultImg?: string;
  currentImage?: string;
}

declare class AvatarUploader extends React.Component<Props> {
  constructor(props: Props);
}

export default AvatarUploader;
