import React, { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import { Dialog, DialogContent, DialogActions, DialogContentText, DialogTitle, Button, TextField } from '@mui/material';

const UploadImageDialog = (props, ref) => {
    const {hostImage, setHostImage} = props;
    const [imageURL, setImageURL] = useState(hostImage);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (hostImage == null) return;
        setImageURL(hostImage)
    }, [hostImage])

    useImperativeHandle(ref, () => ({
        handleOpen() {
            setOpen(true);
        }
    }), [])

    const handleClose = () => {
        setOpen(false);
    };

    const handleSet = () => {
        setHostImage(imageURL);
        setOpen(false);
    };

    const onImageURLChange = (e) => {
        setImageURL(e.target.value);
    }

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Upload an Image</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Please enter an image URL below:
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="url"
                    fullWidth
                    variant="standard"
                    autoComplete='off'
                    value={imageURL}
                    onChange={onImageURLChange}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSet}>Set</Button>
            </DialogActions>
        </Dialog>
    )
}

export default forwardRef(UploadImageDialog)