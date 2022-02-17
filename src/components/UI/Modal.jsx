import React from 'react';
import Card from './Card.jsx';
import Button from './Button.jsx';

import styles from './Modal.module.css';

const Modal = (props) => {
	return (
		<div>
			<div className={styles.backdrop} onClick={props.onClose}></div>
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
		</div>
	);
};

export default Modal;
