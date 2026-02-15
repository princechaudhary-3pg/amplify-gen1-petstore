/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, TextFieldProps, TextProps } from "@aws-amplify/ui-react";
import { LogoWithTextProps } from "./LogoWithText";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MarketingFooterBrandOverridesProps = {
    MarketingFooterBrand?: PrimitiveOverrideProps<FlexProps>;
    "Frame 313"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 434"?: PrimitiveOverrideProps<FlexProps>;
    "Sign up for our newsletter"?: PrimitiveOverrideProps<TextProps>;
    "No spam. We promise."?: PrimitiveOverrideProps<TextProps>;
    "Frame 435"?: PrimitiveOverrideProps<FlexProps>;
    TextField?: PrimitiveOverrideProps<TextFieldProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
    "Frame 433"?: PrimitiveOverrideProps<FlexProps>;
    LogoWithText?: LogoWithTextProps;
    "\u00A9 2023 AWS Amplify UI. All rights reserved."?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type MarketingFooterBrandProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: MarketingFooterBrandOverridesProps | undefined | null;
}>;
export default function MarketingFooterBrand(props: MarketingFooterBrandProps): React.ReactElement;
