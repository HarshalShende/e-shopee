export const orderStatus = (status: number) => {
  switch (status) {
    case 1:
      return 'Processing'
    case 2:
      return 'Ready'
    case 3:
      return 'Shipping'
    case 4:
      return 'Delivered'
    case 5:
      return 'Cancelled'
  }
}
