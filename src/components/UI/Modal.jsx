import React from 'react';
import ReactDOM from 'react-dom';

import Card from './Card.jsx';
import Button from './Button.jsx';
import styles from './Modal.module.css';

const Backdrop = (props) => {
	return <div className={styles.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
	return (
		<Card className={styles.modal}>
			<header className={styles.header}>
				<h2>{props.title}</h2>
			</header>
			<div className={styles.content}>
				<p>{props.message}</p>
			</div>
			<footer className={styles.actions}>
				<Button onClick={props.onClose}>OK</Button>
			</footer>
		</Card>
	);
};

const Modal = (props) => {
	return (
		<React.Fragment>
			{ReactDOM.createPortal(
				<Backdrop onClose={props.onClose} />,
				document.getElementById('backdrop-root')
			)}
			{ReactDOM.createPortal(
				<ModalOverlay title={props.title} message={props.message} onClose={props.onClose} />,
				document.getElementById('modal-root')
			)}
			;
		</React.Fragment>
	);
};

export default Modal;
