export default (numb) => {
    const formatNumber = new Intl.NumberFormat("id-ID");
    return formatNumber.format(numb);
  }