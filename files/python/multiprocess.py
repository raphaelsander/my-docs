from time import sleep
from multiprocessing import Process, Queue, current_process
import os

def generator(queue):
    pid = os.getpid()
    print(f"generator process pid: {pid}")
    try:
        x = 0
        while True:
            if queue.qsize() < 10000:
                x += 1
                queue.put(x)
    except KeyboardInterrupt:
        print(f"generator process interrupted ({pid})")

def consumer(queue):
    pid = os.getpid()
    print(f"consumer ({current_process().name}) process pid: {pid}")
    try:
        while True:
            if queue.empty():
                sleep(1)
            else:
                item = queue.get()
                print(item, queue.qsize(), current_process().name, pid)
    except KeyboardInterrupt:
        print(f"consumer process interrupted ({pid})")

def main():
    queue = Queue()

    generator_process = Process(
        name='generator',
        target=generator,
        args=(queue,)
    )
    generator_process.start()

    consumer_processes = []
    num_consumers = 4

    for i in range(num_consumers):
        p = Process(
            name=f'consumer_{i}',
            target=consumer,
            args=(queue,)
        )
        p.start()
        consumer_processes.append(p)

    try:
        generator_process.join()
        for p in consumer_processes:
            p.join()
    except KeyboardInterrupt:
        print("KeyboardInterrupt received, terminating processes...")
        generator_process.terminate()
        for p in consumer_processes:
            p.terminate()
        generator_process.join()
        for p in consumer_processes:
            p.join()

if __name__ == '__main__':
    main()
