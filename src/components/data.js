import purchase1 from "../SidebarIcons/purchase/purchase1.png";
import purchase2 from "../SidebarIcons/purchase/purchase2.png";
import purchase3 from "../SidebarIcons/purchase/purchase3.png";
import purchase4 from "../SidebarIcons/purchase/purchase4.png";
import increment from "../SidebarIcons/purchase/Group 14241.png";

export const purchaseData = [
  {
    id: 1,
    title: "Payment Receivables",
    icon: purchase1,
    amount: "₹12,40,000",
    increment: increment,
    paymentDue: "OVERDUE PAYMENTS: ₹1,40,000",
  },
  {
    id: 2,
    title: "Payments Made",
    icon: purchase2,
    amount: "₹9,50,000",
    increment: "",
    paymentDue: "NEXT PAYMENT DUE: 1 WEEK",
  },
  {
    id: 3,
    title: "Total Purchases",
    icon: purchase3,
    amount: "₹15,20,000",
    increment: increment,
    paymentDue: "SUPPLIERS: 6",
  },
  {
    id: 4,
    title: "Total Sales",
    icon: purchase4,
    amount: "₹18,00,000",
    increment: increment,
    paymentDue: "TOP SELLING PRODUCT: ELECTRONICS",
  },
];

export const chartData = {
  labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Current Week",
      data: [50, 80, 100, 50, 90, 75, 60],
      backgroundColor: "rgba(58, 53, 221, 1)", // Dark Blue
      borderRadius: 4,
    },
    {
      label: "Last Week",
      data: [30, 50, 80, 30, 75, 65, 35],
      backgroundColor: "rgba(58, 53, 221, 0.3)", // Light Blue
      borderRadius: 4,
    },
  ],
};

export const options = {
  responsive: true,
  scales: {
    y: {
      ticks: {
        callback: (value) => `${value}k`, // Format Y-axis values
      },
      grid: {
        color: "rgba(200, 200, 200, 0.3)",
      },
    },
    x: {
      grid: {
        display: false, // Hide grid lines on X-axis
      },
    },
  },
  plugins: {
    legend: {
      display: false, // Hide legend
    },
  },
};

export const soldItems = [
  {
    id: 1,
    item: "Automotive Parts",
    units: "850 Units",
  },
  {
    id: 2,
    item: "Steel Sheets",
    units: "430 Units",
  },
  {
    id: 3,
    item: "Electronic Parts",
    units: "300 Units",
  },
  {
    id: 4,
    item: "Plastic Materials",
    units: "400 Units",
  },
  {
    id: 5,
    item: "Office Equipments",
    units: "150 Units",
  },
];

export const purchasedItems = [
  {
    id: 1,
    item: "Office Equipments",
    units: "₹2,27,459",
  },
  {
    id: 2,
    item: "Office Equipments",
    units: "₹2,27,459",
  },
  {
    id: 3,
    item: "Plastic Materials",
    units: "₹2,27,459",
  },
  {
    id: 4,
    item: "Electronic Parts",
    units: "₹2,27,459",
  },
  {
    id: 5,
    item: "Automotive Parts",
    units: "₹2,27,459",
  },
];

export const getThemeColor = (color) => {
  if (color === "indigo") {
    return "#4f45e4";
  } else {
    return color;
  }
};

export const getSubThemeColor = (color) => {
  if (color === "indigo") {
    return "#3830b7";
  } else if (color === "orange") {
    return "#F26B0F";
  } else if (color === "green") {
    return "#77B254";
  }
};
