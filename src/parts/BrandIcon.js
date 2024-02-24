import React from "react";
import Button from "elements/Button";
import Circle from 'assets/images/brand_dot.svg';

export default function BrandIcon() {
  return (
    <Button className="brand-icon" href="" type="link">
      MyStaycation<span className="brand-circle"><img src={Circle} alt=""></img></span>
    </Button>
    );
}
