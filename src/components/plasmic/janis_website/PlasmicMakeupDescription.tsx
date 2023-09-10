// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5gGUsmDkteQcDm1s3dbX1r
// Component: vpKpPdjytWKi

import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_janis_website.module.css"; // plasmic-import: 5gGUsmDkteQcDm1s3dbX1r/projectcss
import sty from "./PlasmicMakeupDescription.module.css"; // plasmic-import: vpKpPdjytWKi/css

import LineIcon from "./icons/PlasmicIcon__Line"; // plasmic-import: 1Ce72h70RCoB/icon

createPlasmicElementProxy;

export type PlasmicMakeupDescription__VariantMembers = {
  makeupType: "express" | "social" | "wedding";
  mobile: "mobile";
};
export type PlasmicMakeupDescription__VariantsArgs = {
  makeupType?: SingleChoiceArg<"express" | "social" | "wedding">;
  mobile?: SingleBooleanChoiceArg<"mobile">;
};
type VariantPropType = keyof PlasmicMakeupDescription__VariantsArgs;
export const PlasmicMakeupDescription__VariantProps =
  new Array<VariantPropType>("makeupType", "mobile");

export type PlasmicMakeupDescription__ArgsType = {
  children?: React.ReactNode;
};
type ArgPropType = keyof PlasmicMakeupDescription__ArgsType;
export const PlasmicMakeupDescription__ArgProps = new Array<ArgPropType>(
  "children"
);

export type PlasmicMakeupDescription__OverridesType = {
  container?: p.Flex<"div">;
  svg?: p.Flex<"svg">;
  freeBox?: p.Flex<"div">;
};

export interface DefaultMakeupDescriptionProps {
  children?: React.ReactNode;
  makeupType?: SingleChoiceArg<"express" | "social" | "wedding">;
  mobile?: SingleBooleanChoiceArg<"mobile">;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicMakeupDescription__RenderFunc(props: {
  variants: PlasmicMakeupDescription__VariantsArgs;
  args: PlasmicMakeupDescription__ArgsType;
  overrides: PlasmicMakeupDescription__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof p.useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "makeupType",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.makeupType
      },
      {
        path: "mobile",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.mobile
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = p.useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"container"}
      data-plasmic-override={overrides.container}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.container,
        {
          [sty.containermakeupType_express_mobile]:
            hasVariant($state, "mobile", "mobile") &&
            hasVariant($state, "makeupType", "express"),
          [sty.containermakeupType_social]: hasVariant(
            $state,
            "makeupType",
            "social"
          ),
          [sty.containermakeupType_wedding]: hasVariant(
            $state,
            "makeupType",
            "wedding"
          ),
          [sty.containermobile]: hasVariant($state, "mobile", "mobile")
        }
      )}
    >
      <LineIcon
        data-plasmic-name={"svg"}
        data-plasmic-override={overrides.svg}
        className={classNames(projectcss.all, sty.svg)}
        role={"img"}
      />

      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        {p.renderPlasmicSlot({
          defaultContents:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam convallis tempus sed a ornare facilisi ac cursus purus. Elit, montes, in et fermentum a dignissim. Massa purus mauris, lectus imperdiet.",
          value: args.children,
          className: classNames(sty.slotTargetChildren)
        })}
      </div>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  container: ["container", "svg", "freeBox"],
  svg: ["svg"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  container: "div";
  svg: "svg";
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMakeupDescription__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMakeupDescription__VariantsArgs;
    args?: PlasmicMakeupDescription__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicMakeupDescription__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicMakeupDescription__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicMakeupDescription__ArgProps,
          internalVariantPropNames: PlasmicMakeupDescription__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicMakeupDescription__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "container") {
    func.displayName = "PlasmicMakeupDescription";
  } else {
    func.displayName = `PlasmicMakeupDescription.${nodeName}`;
  }
  return func;
}

export const PlasmicMakeupDescription = Object.assign(
  // Top-level PlasmicMakeupDescription renders the root element
  makeNodeComponent("container"),
  {
    // Helper components rendering sub-elements
    svg: makeNodeComponent("svg"),
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicMakeupDescription
    internalVariantProps: PlasmicMakeupDescription__VariantProps,
    internalArgProps: PlasmicMakeupDescription__ArgProps
  }
);

export default PlasmicMakeupDescription;
/* prettier-ignore-end */
