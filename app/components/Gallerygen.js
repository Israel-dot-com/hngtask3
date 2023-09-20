"use client"
import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import SkeletonLoader from './SkeletonLoader';
// Array of names and urls
const finalSpaceCharacters = [
  {
    id: 'gary',
    name: 'Gary Goodspeedo',
    thumb: 'https://img.freepik.com/free-photo/what-are-you-waiting-horizontal-shot-frowning-indignant-young-afro-american-male-stylish-eyewear-gesturing-emotionally-expressing-indignation-having-puzzled-look-being-loss_343059-803.jpg?size=626&ext=jpg'
  },
  {
    id: 'cato',
    name: 'Little Cato',
    thumb: 'https://img.freepik.com/free-photo/indifferent-confused-black-woman-spreads-palms-confusingly-has-doubts-wears-green-turtleneck-has-hesitant-face-expression-isolated-pink-space_273609-39143.jpg?size=626&ext=jpg'
  },
  {
    id: 'kvn',
    name: 'KVN',
    thumb: 'https://img.freepik.com/free-photo/horizontal-shot-glad-dark-skinned-lady-spreads-palms_273609-28734.jpg?size=626&ext=jpg'
  },
  {
    id: 'mooncake',
    name: 'Mooncakto',
    thumb: 'https://img.freepik.com/free-photo/horizontal-shot-cheerful-mixed-race-two-young-women-point-floor-with-fore-fingers-dressed-casual-outfit_273609-23490.jpg?size=626&ext=jpg'
  },
  {
    id: 'quinn',
    name: 'Quinn Ergon',
    thumb: 'https://img.freepik.com/free-photo/front-view-smiley-men-contest_23-2149943830.jpg?size=626&ext=jpg'
  }
]

// function that checks when page is loaded and slows it down a bit

function App() {
  const [loading, setLoading] = useState(true);

    useEffect(() => {
    // Simulate fetching gallery data
    setTimeout(() => {
      setLoading(false); // Set loading state to false when data is fetched
    }, 20); // Adjust the delay as needed
  }, []);

  const [characters, updateCharacters] = useState(finalSpaceCharacters);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }

  return (
    <div className="App px-10">
    {loading ? (
      <SkeletonLoader />
    ): (
      <header className="">
        <h1 className='text-center font-medium text-lg py-5'>Feel Free To Re-Arrange</h1>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <div className="characters md:grid grid-cols-2 gap-4 pb-20" {...provided.droppableProps} ref={provided.innerRef}>
                {characters.map(({id, name, thumb}, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <div className='p-4 border border-gray-300 rounded-lg shadow-md' ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <div className="characters-thumb">
                            <img className='aspect-auto object-contain h-32 w-full' src={thumb} />
                          </div>
                          <p className='text-center'>
                            { name }
                          </p>
                        </div>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </header>
    )}
  </div>
  );
}

export default App;