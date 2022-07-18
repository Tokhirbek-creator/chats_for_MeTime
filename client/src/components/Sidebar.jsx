import React, { useState } from 'react';
import {
  Tab, Nav, Button, Modal,
} from 'react-bootstrap';
import Contacts from './Contacts';
import Conversations from './Conversations';
import NewContactModal from './NewContactModal';
import NewConversationModal from './NewConversationModal';

const CONVERSATIONS_KEY = 'conversations';
const CONTACTS_KEY = 'contacts';

export default function Sidebar({ id }) {
  const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY);
  const [modalOpen, setModalOpen] = useState(false);
  const hasConversations = activeKey === CONVERSATIONS_KEY;

  function closeModal() {
    setModalOpen(false);
  }

  return (
    <div style={{ width: '250px' }} className="d-flex flex-column">
      <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
        <Nav variant="tabs" className="justify-content-center">
          <Nav.Item>
            <Nav.Link className="text-success" eventKey={CONVERSATIONS_KEY}>Чаты</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="text-info" eventKey={CONTACTS_KEY}>Контакты</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content className="border-right overflow-auto flex-grow-1">
          <Tab.Pane eventKey={CONVERSATIONS_KEY}>
            <Conversations />
          </Tab.Pane>
          <Tab.Pane eventKey={CONTACTS_KEY}>
            <Contacts />
          </Tab.Pane>
        </Tab.Content>
        <div className="p-2 border-top border-right small">
          Ваш Id:
          {' '}
          <span className="text-muted">{ id }</span>
        </div>
        <Button onClick={() => setModalOpen(true)} className="bg-success rounded-0">
          Новый
          {' '}
          {hasConversations ? 'чат' : 'контакт'}
        </Button>
      </Tab.Container>

      <Modal show={modalOpen} onHide={closeModal}>
        {hasConversations
          ? <NewConversationModal closeModal={closeModal} />
          : (
            <NewContactModal closeModal={closeModal} />
          )}
      </Modal>
    </div>
  );
}
