import { classNames, useDynamicRefs } from '@neat-treats/utils';
import './DNDContainer.scss';
import { Transition } from '../Transition/Transition';
import { useState } from 'react';

export type NTDNDContainerProps = {
  className?: string;
  children: JSX.Element[];
};

export const DNDContainer = ({ className, children }: NTDNDContainerProps) => {
  const [dragItems, setDragItems] = useState(
    children.map((child) => ({ child, id: crypto.randomUUID() }))
  );
  const [draggedId, setDraggedId] = useState<typeof dragItems[number] | null>(
    null
  );
  const [draggedOverId, setDraggedOverId] = useState<
    typeof dragItems[number] | null
  >(null);
  const { setRef, getRef } = useDynamicRefs();

  const toggleClass = (id: string, action: 'add' | 'remove' = 'add') => {
    setTimeout(() => {
      const ref = getRef(id);
      if (!ref) return;
      if (action === 'add') {
        ref.classList.add('hidden');
      }
      if (action === 'remove') {
        ref.classList.remove('hidden');
      }
    }, 0);
  };

  const onDragStart = (el: typeof dragItems[number]) => {
    setDraggedId(el);
    toggleClass(el.id);
  };

  const reassignOrder = () => {
    const swapPositions = (array: any[], a: number, b: number) => {
      [array[a], array[b]] = [array[b], array[a]];
      return array;
    };

    if (draggedId && draggedOverId) {
      setDragItems((prev) =>
        swapPositions(
          prev,
          prev.indexOf(draggedId),
          prev.indexOf(draggedOverId)
        )
      );
    }
  };
  const onDragEnd = (el: typeof dragItems[number]) => {
    toggleClass(el.id, 'remove');

    reassignOrder();
  };
  const onDragOver = (
    el: typeof dragItems[number],
    e: React.DragEvent<HTMLSpanElement>
  ) => {
    setDraggedOverId(el);
    const { bottom, top, height } = e.currentTarget.getBoundingClientRect();
    const halfway = (bottom + top) / 2;
    e.clientX;
    console.log(halfway, e.clientY, height);
    reassignOrder();
  };

  return (
    <div className={classNames('nt-dnd-container', className)}>
      {dragItems.map((el) => {
        return (
          <Transition
            key={el.id}
            draggable={true}
            onDragStart={() => onDragStart(el)}
            onDragEnd={() => onDragEnd(el)}
            onDragOver={(e) => onDragOver(el, e)}
            ref={(ref) => setRef(el.id, ref)}
          >
            {el.child}
          </Transition>
        );
      })}
    </div>
  );
};
