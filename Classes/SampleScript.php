<?php

namespace Classes;

class SampleScript
{
    private $redis;
    private const REDIS_KEY = 'runningScript';

    public function __construct()
    {

        $this->redis = new \Redis();
        $this->redis->connect(getenv('REDIS_HOST'), getenv('REDIS_PORT'));

        if (!$this->redis->ping()) {
            die("Cannot connect to redis server.\n");
        }
    }

    public function run(): array
    {
        $returnStatus = [];

        if (!$this->functionIsRunning()) {
            $this->redis->setex(self::REDIS_KEY, 60, true);
            sleep(5);
            $this->redis->delete(self::REDIS_KEY);
            $returnStatus = [
                'success' => true,
                'message' => 'Script run success',
            ];
        } else {
            $returnStatus = [
                'success' => false,
                'message' => 'Script already runing',
            ];
        }

        return $returnStatus;
    }

    private function functionIsRunning(): bool
    {
        return $this->redis->exists(self::REDIS_KEY);
    }
}
