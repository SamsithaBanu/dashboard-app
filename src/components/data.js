import purchase1 from '../SidebarIcons/purchase/purchase1.png';
import purchase2 from '../SidebarIcons/purchase/purchase2.png';
import purchase3 from '../SidebarIcons/purchase/purchase3.png';
import purchase4 from '../SidebarIcons/purchase/purchase4.png';

export const purchaseData =[
    {
        id: 1,
        title:'Payment Receivables',
        icon:purchase1,
        amount:'₹12,40,000',
        increment:'+3.87%',
        paymentDue:'OVERDUE PAYMENTS: ₹1,40,000',
    },
    {
        id: 2,
        title:'Payments Made',
        icon: purchase2,
        amount:'₹9,50,000',
        increment:'',
        paymentDue:'NEXT PAYMENT DUE: 1 WEEK',
    },
    {
        id: 3,
        title:'Total Purchases',
        icon: purchase3,
        amount:'₹15,20,000',
        increment:'+3.87%',
        paymentDue:'SUPPLIERS: 6',
    },
    {
        id: 4,
        title:'Total Sales',
        icon: purchase4,
        amount:'₹18,00,000',
        increment:'+3.87%',
        paymentDue:'TOP SELLING PRODUCT: ELECTRONICS',
    },
]