import React, {Component} from 'react';
import PropTypes from "prop-types";
import Avatar from './Avatar';

import defaultPlaceholder from "./static/assets/upload_icon.png"

export default class AvatarUploader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentImage: null,
            loading: false
        }
    }
    render() {
        const {disabled, size, defaultImg, fileType, placeholder, onImageChange, currentImage} = this.props;
        return (
            <Avatar placeholder={placeholder} size={size}>
                {(currentImage || defaultImg)
                    ? <Avatar.Preview src={currentImage || defaultImg}/>
                    : null}
                <Avatar.Uploader
                    fileType={fileType}
                    onChange={onImageChange}
                    disabled={disabled}/>
            </Avatar>
        )
    }
}

AvatarUploader.propTypes = {
    onImageChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    fileType: PropTypes.string,
    size: PropTypes.number,
    defaultImg: PropTypes.string,
    currentImage: PropTypes.string,
}

AvatarUploader.defaultProps = {
    disabled: false,
    placeholder: defaultPlaceholder,
    fileType: "image/jpeg",
    size: 150
};
