// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5gGUsmDkteQcDm1s3dbX1r
// Component: zjX1ZiAZla8T

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
import Tab from "../../Tab"; // plasmic-import: Ss0T6rPu5VE1/component
import Images from "../../Images"; // plasmic-import: OXf6eLeE3PJ1/component
import MakeupDescription from "../../MakeupDescription"; // plasmic-import: vpKpPdjytWKi/component
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources"; // plasmic-import: blLYAJYvskBo/codeComponent

import { useScreenVariants as useScreenVariantsdpeUlLjeGa6Y } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: dpeULLjeGa6Y/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_janis_website.module.css"; // plasmic-import: 5gGUsmDkteQcDm1s3dbX1r/projectcss
import sty from "./PlasmicShowcase.module.css"; // plasmic-import: zjX1ZiAZla8T/css

import LineIcon from "./icons/PlasmicIcon__Line"; // plasmic-import: 1Ce72h70RCoB/icon
import Line2Icon from "./icons/PlasmicIcon__Line2"; // plasmic-import: 2pBtv_yC8Zpj/icon

createPlasmicElementProxy;

export type PlasmicShowcase__VariantMembers = {
  makeupType: "express" | "social" | "wedding";
};
export type PlasmicShowcase__VariantsArgs = {
  makeupType?: SingleChoiceArg<"express" | "social" | "wedding">;
};
type VariantPropType = keyof PlasmicShowcase__VariantsArgs;
export const PlasmicShowcase__VariantProps = new Array<VariantPropType>(
  "makeupType"
);

export type PlasmicShowcase__ArgsType = {};
type ArgPropType = keyof PlasmicShowcase__ArgsType;
export const PlasmicShowcase__ArgProps = new Array<ArgPropType>();

export type PlasmicShowcase__OverridesType = {
  showcase?: p.Flex<"div">;
  tabs?: p.Flex<"div">;
  images?: p.Flex<typeof Images>;
  serviceDescriptions?: p.Flex<"div">;
  maquillajeRePro2?: p.Flex<"div">;
  maquillajeElPurete2?: p.Flex<"div">;
};

export interface DefaultShowcaseProps {
  makeupType?: SingleChoiceArg<"express" | "social" | "wedding">;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function PlasmicShowcase__RenderFunc(props: {
  variants: PlasmicShowcase__VariantsArgs;
  args: PlasmicShowcase__ArgsType;
  overrides: PlasmicShowcase__OverridesType;
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
        path: "variable",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => "social"
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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsdpeUlLjeGa6Y()
  });

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"showcase"}
      data-plasmic-override={overrides.showcase}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.showcase,
        {
          [sty.showcasemakeupType_social]: hasVariant(
            $state,
            "makeupType",
            "social"
          )
        }
      )}
    >
      <p.Stack
        as={"div"}
        data-plasmic-name={"tabs"}
        data-plasmic-override={overrides.tabs}
        hasGap={true}
        className={classNames(projectcss.all, sty.tabs)}
      >
        <Tab
          className={classNames("__wab_instance", sty.tab__utygw, {
            [sty.tabmakeupType_social__utygWvoQrK]: hasVariant(
              $state,
              "makeupType",
              "social"
            ),
            [sty.tabmakeupType_wedding__utygw2KAvg]: hasVariant(
              $state,
              "makeupType",
              "wedding"
            )
          })}
          onClick={async event => {
            const $steps = {};
            $steps["updateMakeupType"] = true
              ? (() => {
                  const actionArgs = {
                    vgroup: __wrapUserFunction(
                      {
                        type: "InteractionArgLoc",
                        actionName: "updateVariant",
                        interactionUuid: "tKqKPdV-VEin",
                        componentUuid: "zjX1ZiAZla8T",
                        argName: "vgroup"
                      },
                      () => "makeupType"
                    ),
                    operation: __wrapUserFunction(
                      {
                        type: "InteractionArgLoc",
                        actionName: "updateVariant",
                        interactionUuid: "tKqKPdV-VEin",
                        componentUuid: "zjX1ZiAZla8T",
                        argName: "operation"
                      },
                      () => 0
                    ),
                    value: __wrapUserFunction(
                      {
                        type: "InteractionArgLoc",
                        actionName: "updateVariant",
                        interactionUuid: "tKqKPdV-VEin",
                        componentUuid: "zjX1ZiAZla8T",
                        argName: "value"
                      },
                      () => "express"
                    )
                  };
                  return __wrapUserFunction(
                    {
                      type: "InteractionLoc",
                      actionName: "updateVariant",
                      interactionUuid: "tKqKPdV-VEin",
                      componentUuid: "zjX1ZiAZla8T"
                    },
                    () =>
                      (({ vgroup, value }) => {
                        if (typeof value === "string") {
                          value = [value];
                        }

                        p.set($state, vgroup, value);
                        return value;
                      })?.apply(null, [actionArgs]),
                    actionArgs
                  );
                })()
              : undefined;
            if (
              typeof $steps["updateMakeupType"] === "object" &&
              typeof $steps["updateMakeupType"].then === "function"
            ) {
              $steps["updateMakeupType"] = await __wrapUserPromise(
                {
                  type: "InteractionLoc",
                  actionName: "updateVariant",
                  interactionUuid: "tKqKPdV-VEin",
                  componentUuid: "zjX1ZiAZla8T"
                },
                $steps["updateMakeupType"]
              );
            }
          }}
          selected={
            hasVariant($state, "makeupType", "wedding")
              ? undefined
              : hasVariant($state, "makeupType", "social")
              ? undefined
              : true
          }
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__anTm6
            )}
          >
            {"Makeup express"}
          </div>
        </Tab>
        <Tab
          className={classNames("__wab_instance", sty.tab__oOjj, {
            [sty.tabmakeupType_social__oOjjvoQrK]: hasVariant(
              $state,
              "makeupType",
              "social"
            )
          })}
          onClick={async event => {
            const $steps = {};
            $steps["updateMakeupType"] = true
              ? (() => {
                  const actionArgs = {
                    vgroup: __wrapUserFunction(
                      {
                        type: "InteractionArgLoc",
                        actionName: "updateVariant",
                        interactionUuid: "b47YqEdnCnoF",
                        componentUuid: "zjX1ZiAZla8T",
                        argName: "vgroup"
                      },
                      () => "makeupType"
                    ),
                    operation: __wrapUserFunction(
                      {
                        type: "InteractionArgLoc",
                        actionName: "updateVariant",
                        interactionUuid: "b47YqEdnCnoF",
                        componentUuid: "zjX1ZiAZla8T",
                        argName: "operation"
                      },
                      () => 0
                    ),
                    value: __wrapUserFunction(
                      {
                        type: "InteractionArgLoc",
                        actionName: "updateVariant",
                        interactionUuid: "b47YqEdnCnoF",
                        componentUuid: "zjX1ZiAZla8T",
                        argName: "value"
                      },
                      () => "social"
                    )
                  };
                  return __wrapUserFunction(
                    {
                      type: "InteractionLoc",
                      actionName: "updateVariant",
                      interactionUuid: "b47YqEdnCnoF",
                      componentUuid: "zjX1ZiAZla8T"
                    },
                    () =>
                      (({ vgroup, value }) => {
                        if (typeof value === "string") {
                          value = [value];
                        }

                        p.set($state, vgroup, value);
                        return value;
                      })?.apply(null, [actionArgs]),
                    actionArgs
                  );
                })()
              : undefined;
            if (
              typeof $steps["updateMakeupType"] === "object" &&
              typeof $steps["updateMakeupType"].then === "function"
            ) {
              $steps["updateMakeupType"] = await __wrapUserPromise(
                {
                  type: "InteractionLoc",
                  actionName: "updateVariant",
                  interactionUuid: "b47YqEdnCnoF",
                  componentUuid: "zjX1ZiAZla8T"
                },
                $steps["updateMakeupType"]
              );
            }
          }}
          selected={
            hasVariant($state, "makeupType", "social") ? true : undefined
          }
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__fl5KA
            )}
          >
            {"Makeup social"}
          </div>
        </Tab>
        <Tab
          className={classNames("__wab_instance", sty.tab__zpz3O, {
            [sty.tabmakeupType_wedding__zpz3O2KAvg]: hasVariant(
              $state,
              "makeupType",
              "wedding"
            )
          })}
          onClick={async event => {
            const $steps = {};
            $steps["updateMakeupType"] = true
              ? (() => {
                  const actionArgs = {
                    vgroup: __wrapUserFunction(
                      {
                        type: "InteractionArgLoc",
                        actionName: "updateVariant",
                        interactionUuid: "6B5zihrKUy0p",
                        componentUuid: "zjX1ZiAZla8T",
                        argName: "vgroup"
                      },
                      () => "makeupType"
                    ),
                    operation: __wrapUserFunction(
                      {
                        type: "InteractionArgLoc",
                        actionName: "updateVariant",
                        interactionUuid: "6B5zihrKUy0p",
                        componentUuid: "zjX1ZiAZla8T",
                        argName: "operation"
                      },
                      () => 0
                    ),
                    value: __wrapUserFunction(
                      {
                        type: "InteractionArgLoc",
                        actionName: "updateVariant",
                        interactionUuid: "6B5zihrKUy0p",
                        componentUuid: "zjX1ZiAZla8T",
                        argName: "value"
                      },
                      () => "wedding"
                    )
                  };
                  return __wrapUserFunction(
                    {
                      type: "InteractionLoc",
                      actionName: "updateVariant",
                      interactionUuid: "6B5zihrKUy0p",
                      componentUuid: "zjX1ZiAZla8T"
                    },
                    () =>
                      (({ vgroup, value }) => {
                        if (typeof value === "string") {
                          value = [value];
                        }

                        p.set($state, vgroup, value);
                        return value;
                      })?.apply(null, [actionArgs]),
                    actionArgs
                  );
                })()
              : undefined;
            if (
              typeof $steps["updateMakeupType"] === "object" &&
              typeof $steps["updateMakeupType"].then === "function"
            ) {
              $steps["updateMakeupType"] = await __wrapUserPromise(
                {
                  type: "InteractionLoc",
                  actionName: "updateVariant",
                  interactionUuid: "6B5zihrKUy0p",
                  componentUuid: "zjX1ZiAZla8T"
                },
                $steps["updateMakeupType"]
              );
            }
          }}
          selected={
            hasVariant($state, "makeupType", "wedding") ? true : undefined
          }
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__owSqE
            )}
          >
            {"Makeup para bodas"}
          </div>
        </Tab>
      </p.Stack>
      <Images
        data-plasmic-name={"images"}
        data-plasmic-override={overrides.images}
        className={classNames("__wab_instance", sty.images, {
          [sty.imagesmakeupType_social]: hasVariant(
            $state,
            "makeupType",
            "social"
          ),
          [sty.imagesmakeupType_wedding]: hasVariant(
            $state,
            "makeupType",
            "wedding"
          )
        })}
        makeupType={
          hasVariant($state, "makeupType", "wedding")
            ? "wedding"
            : hasVariant($state, "makeupType", "social")
            ? "social"
            : (() => {
                try {
                  return undefined;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return "express";
                  }
                  throw e;
                }
              })()
        }
      />

      <div
        data-plasmic-name={"serviceDescriptions"}
        data-plasmic-override={overrides.serviceDescriptions}
        className={classNames(projectcss.all, sty.serviceDescriptions)}
      >
        <MakeupDescription
          className={classNames(
            "__wab_instance",
            sty.makeupDescription__gVWjD,
            {
              [sty.makeupDescriptionmakeupType_social__gVWjDvoQrK]: hasVariant(
                $state,
                "makeupType",
                "social"
              ),
              [sty.makeupDescriptionmakeupType_wedding__gVWjD2KAvg]: hasVariant(
                $state,
                "makeupType",
                "wedding"
              )
            }
          )}
          makeupType={
            hasVariant($state, "makeupType", "wedding") ? "wedding" : "express"
          }
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__ccl9L,
              {
                [sty.textmakeupType_social__ccl9LvoQrK]: hasVariant(
                  $state,
                  "makeupType",
                  "social"
                )
              }
            )}
          >
            {
              "Limpieza superficial e hidrataci\u00f3n de la piel. Dise\u00f1o de cejas. Correcci\u00f3n de imperfecciones de la piel. Contorno de rostro. Delineado. M\u00e1scara de pesta\u00f1as. Labial."
            }
          </div>
        </MakeupDescription>
        {(
          hasVariant($state, "makeupType", "social")
            ? true
            : hasVariant(globalVariants, "screen", "tablet")
            ? true
            : false
        ) ? (
          <MakeupDescription
            className={classNames(
              "__wab_instance",
              sty.makeupDescription__jAtmG,
              {
                [sty.makeupDescriptionmakeupType_social__jAtmGvoQrK]:
                  hasVariant($state, "makeupType", "social")
              }
            )}
            makeupType={"social"}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__ve2BQ
              )}
            >
              {
                "Limpieza superficial e hidrataci\u00f3n de la piel. Dise\u00f1o de cejas. Correcci\u00f3n de imperfecciones de la piel. Contorno de rostro.\nDelineado. M\u00e1scara de pesta\u00f1as. Labial."
              }
            </div>
          </MakeupDescription>
        ) : null}
        <p.Stack
          as={"div"}
          data-plasmic-name={"maquillajeRePro2"}
          data-plasmic-override={overrides.maquillajeRePro2}
          hasGap={true}
          className={classNames(projectcss.all, sty.maquillajeRePro2)}
        >
          <LineIcon
            className={classNames(projectcss.all, sty.svg__tTniV)}
            role={"img"}
          />

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__gUCfV
            )}
          >
            {
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam convallis tempus sed a ornare facilisi ac cursus purus. Elit, montes, in et fermentum a dignissim. Massa purus mauris, lectus imperdiet."
            }
          </div>
        </p.Stack>
        <p.Stack
          as={"div"}
          data-plasmic-name={"maquillajeElPurete2"}
          data-plasmic-override={overrides.maquillajeElPurete2}
          hasGap={true}
          className={classNames(projectcss.all, sty.maquillajeElPurete2)}
        >
          <Line2Icon
            className={classNames(projectcss.all, sty.svg___9Diuu)}
            role={"img"}
          />

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__vk5S
            )}
          >
            {
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam convallis tempus sed a ornare facilisi ac cursus purus. Elit, montes, in et fermentum a dignissim. Massa purus mauris, lectus imperdiet."
            }
          </div>
        </p.Stack>
      </div>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  showcase: [
    "showcase",
    "tabs",
    "images",
    "serviceDescriptions",
    "maquillajeRePro2",
    "maquillajeElPurete2"
  ],
  tabs: ["tabs"],
  images: ["images"],
  serviceDescriptions: [
    "serviceDescriptions",
    "maquillajeRePro2",
    "maquillajeElPurete2"
  ],
  maquillajeRePro2: ["maquillajeRePro2"],
  maquillajeElPurete2: ["maquillajeElPurete2"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  showcase: "div";
  tabs: "div";
  images: typeof Images;
  serviceDescriptions: "div";
  maquillajeRePro2: "div";
  maquillajeElPurete2: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicShowcase__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicShowcase__VariantsArgs;
    args?: PlasmicShowcase__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicShowcase__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicShowcase__ArgsType,
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
          internalArgPropNames: PlasmicShowcase__ArgProps,
          internalVariantPropNames: PlasmicShowcase__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicShowcase__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "showcase") {
    func.displayName = "PlasmicShowcase";
  } else {
    func.displayName = `PlasmicShowcase.${nodeName}`;
  }
  return func;
}

export const PlasmicShowcase = Object.assign(
  // Top-level PlasmicShowcase renders the root element
  makeNodeComponent("showcase"),
  {
    // Helper components rendering sub-elements
    tabs: makeNodeComponent("tabs"),
    images: makeNodeComponent("images"),
    serviceDescriptions: makeNodeComponent("serviceDescriptions"),
    maquillajeRePro2: makeNodeComponent("maquillajeRePro2"),
    maquillajeElPurete2: makeNodeComponent("maquillajeElPurete2"),

    // Metadata about props expected for PlasmicShowcase
    internalVariantProps: PlasmicShowcase__VariantProps,
    internalArgProps: PlasmicShowcase__ArgProps
  }
);

export default PlasmicShowcase;
/* prettier-ignore-end */
