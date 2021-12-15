Vue.config.devtools = true

const boolzapp_chat = new Vue({
    el: '#app-container',
    data: {
        notifications: false,
        now: dayjs().format('DD/MM/YYYY HH:mm:ss'),
        newMessage: '',
        searchContact: '',
        activeContact: 0,
        activeMessage: null,
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent',
                        visibleMessage: true,
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent',
                        visibleMessage: true,
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received',
                        visibleMessage: true,
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent',
                        visibleMessage: true,
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received',
                        visibleMessage: true,
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent',
                        visibleMessage: true,
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received',
                        visibleMessage: true,
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent',
                        visibleMessage: true,
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received',
                        visibleMessage: true,
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent',
                        visibleMessage: true,
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received',
                        visibleMessage: true,
                    }
                ],
            },
        ],        
    },
    methods: {
        showContactMessages: function(index){
            this.activeContact = index;
        },
        sendMessage: function(){
            const trimNewMessage = this.newMessage.trim();
            if (trimNewMessage.length > 0) {
                this.contacts[this.activeContact].messages.push({
                    date: this.now,
                    text: this.newMessage,
                    status: 'sent',
                    visibleMessage: true,
                });
                setTimeout(() => {
                    this.receiveMessage();
                }, 1000);
            };
            this.newMessage = '';
        },
        receiveMessage: function(){
            this.contacts[this.activeContact].messages.push({
                date: this.now,
                text: 'Scusa ora non posso parlare.',
                status: 'received'
            })
        },
        searchInContacts: function(){
            this.contacts.forEach(contact => {
                if (contact.name.toLowerCase().includes(this.searchContact.toLowerCase()) ){
                    contact.visible = true;
                } else {
                    contact.visible = false;
                }
            });
        },
        notificationsOn: function(){
            this.notifications = true;
        },
        openToggleMessageMenu: function(index){
            if (this.activeMessage === index) {
                this.activeMessage = null;
            } else {
                this.activeMessage = index;
            }
        }
    },
})