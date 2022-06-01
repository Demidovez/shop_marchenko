import { MutableRefObject, useEffect, useState } from "react";

enum EStatus {
  IDLE,
  APPEARED,
  DISAPPEARED,
}

export default function useVisible(
  refComponent: MutableRefObject<null>
): boolean {
  const [status, setSatus] = useState<EStatus>(EStatus.IDLE);
  const [observer, setObserver] = useState<IntersectionObserver>();

  const callbackVisible = (entries: any) => {
    const [entry] = entries;
    setSatus(entry.isIntersecting ? EStatus.APPEARED : EStatus.DISAPPEARED);
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(callbackVisible, options);

    setObserver(observer);
  }, [refComponent]);

  useEffect(() => {
    if (refComponent.current && observer && status === EStatus.IDLE)
      observer.observe(refComponent.current);

    if (refComponent.current && observer && status === EStatus.APPEARED)
      observer.unobserve(refComponent.current);
  }, [observer, status, refComponent]);

  return status === EStatus.APPEARED;
}
