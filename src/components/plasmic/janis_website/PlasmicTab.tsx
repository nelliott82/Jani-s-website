// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5gGUsmDkteQcDm1s3dbX1r
// Component: Ss0T6rPu5VE1

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
import sty from "./PlasmicTab.module.css"; // plasmic-import: Ss0T6rPu5VE1/css

createPlasmicElementProxy;

export type PlasmicTab__VariantMembers = {
  selected: "selected";
  big: "big";
};
export type PlasmicTab__VariantsArgs = {
  selected?: SingleBooleanChoiceArg<"selected">;
  big?: SingleBooleanChoiceArg<"big">;
};
type VariantPropType = keyof PlasmicTab__VariantsArgs;
export const PlasmicTab__VariantProps = new Array<VariantPropType>(
  "selected",
  "big"
);

export type PlasmicTab__ArgsType = {
  children?: React.ReactNode;
};
type ArgPropType = keyof PlasmicTab__ArgsType;
export const PlasmicTab__ArgProps = new Array<ArgPropType>("children");

export type PlasmicTab__OverridesType = {
  pill?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
};

export interface DefaultTabProps {
  children?: React.ReactNode;
  selected?: SingleBooleanChoiceArg<"selected">;
  big?: SingleBooleanChoiceArg<"big">;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicTab__RenderFunc(props: {
  variants: PlasmicTab__VariantsArgs;
  args: PlasmicTab__ArgsType;
  overrides: PlasmicTab__OverridesType;
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
        path: "selected",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.selected
      },
      {
        path: "big",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.big
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
      data-plasmic-name={"pill"}
      data-plasmic-override={overrides.pill}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.pill,
        {
          [sty.pillbig]: hasVariant($state, "big", "big"),
          [sty.pillselected]: hasVariant($state, "selected", "selected")
        }
      )}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Tab name",
          value: args.children,
          className: classNames(sty.slotTargetChildren, {
            [sty.slotTargetChildrenbig]: hasVariant($state, "big", "big")
          })
        })}
      </div>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  pill: ["pill", "freeBox"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  pill: "div";
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTab__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTab__VariantsArgs;
    args?: PlasmicTab__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTab__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicTab__ArgsType,
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
          internalArgPropNames: PlasmicTab__ArgProps,
          internalVariantPropNames: PlasmicTab__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicTab__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "pill") {
    func.displayName = "PlasmicTab";
  } else {
    func.displayName = `PlasmicTab.${nodeName}`;
  }
  return func;
}

export const PlasmicTab = Object.assign(
  // Top-level PlasmicTab renders the root element
  makeNodeComponent("pill"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicTab
    internalVariantProps: PlasmicTab__VariantProps,
    internalArgProps: PlasmicTab__ArgProps
  }
);

export default PlasmicTab;
/* prettier-ignore-end */